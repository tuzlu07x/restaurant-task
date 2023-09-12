# First Exercise

## Project Usage Guide

This document provides the necessary steps to clone the project, install dependencies, set up the database with seed data, compile frontend assets, and access the RESTful endpoint at /restaurants.

## Step 1: Clone the Project

To clone the project to your local machine, use the following command:

```
git clone

```

## Step 2: Install Composer Dependencies

After navigating to the project folder, use Composer to install the required PHP dependencies:

```
composer install
```

## Step 3: Create the Database and Seed Data

To create the database and populate it with sample data, run the following command:

```
php artisan migrate --seed
```

## Step 4: Install NPM Dependencies and Compile Frontend

Install frontend dependencies and compile frontend assets by running the following commands:

```
npm install
npm run dev
```

## Step 5: Access the RESTful Endpoint

Open your browser or use your preferred API testing tool to navigate to the following URL:

```
http://localhost:8000/restaurants
```

You can access the RESTful endpoint by following the relevant routing in the RestaurantController.

## Notes

For more information or documentation about the project, refer to the project's source code and relevant documentation.

# Third Exercise

```php

<?php
public function getServiceTimesForRestaurant(Restaurant $restaurant, Carbon $date, $ignoreBookingDuration = false)
{
    $booking_times = []; // An empty array has been created, burada rezervasyon for booking times
    $filtered_booking_times = []; // it was filtered empty array that get booking times
    $opening_hours = []; // it was created  that Restaurant is open hours
    $day = $date->englishDayOfWeek; // it was created to get english day of week
    $step = $restaurant->default_booking_time_step_minutes; // the restaurant was determined that default booking steps

    try {
        if ($ssh = $restaurant->inSpecialServiceHoursActive($date)) {
            // if An special service times is active, we use here
            $service_hours = $restaurant->specialServiceHours($day, $ssh->id)
                ->makeHidden('id', 'day', 'restaurant_id', 'created_at', 'updated_at'); // hidden them
        } else {
            // Otherwise, we use normal times.
            $service_hours = $restaurant->serviceHours($day)
                ->makeHidden('id', 'day', 'restaurant_id', 'created_at', 'updated_at'); // hidden them
        }
    } catch (\Throwable $th) {
        if there is any mistake, here works and return booking times
        return $booking_times;
    }

    $skip = [];
    $c = 0;
    foreach ($service_hours as $service_hour) {
        // this loop was started for special service times process
        $c++;
        $open = Carbon::createFromFormat('H:i:s', $service_hour->open); // Açılış saati
        $close = Carbon::createFromFormat('H:i:s', $service_hour->close); // Kapanış saati

        if ($service_hour->enforce_one_sitting) {
            // Eğer sadece tek oturma düzeni (enforce_one_sitting) varsa, açılış saatini rezervasyon saatleri listesine ekliyoruz.
            $booking_times[] = $open->format('H:i');
            continue;
        }

        if ($service_hour->ingore_booking_duration) {
            // Eğer rezervasyon süresi (booking_duration) görmezden gelinmesi gerekiyorsa, bu durumu işaretliyoruz.
            $ignoreBookingDuration = true;
        }

        if ($c == count($service_hours) && !$ignoreBookingDuration) {
            // Son hizmet saatini işliyorsak ve rezervasyon süresini göz ardı etmiyorsak, kapanış saatinden rezervasyon süresini çıkarıyoruz.
            $close->subMinutes($restaurant->default_booking_duration_hours);
        }

        $diff = $open->diffInMinutes($close); // Açılış ve kapanış saatleri arasındaki farkı hesaplıyoruz.
        $booking_times[] = $open->format('H:i'); // Açılış saati rezervasyon saatleri listesine ekleniyor.

        while ($diff > 0 && ($close->format('i') == '59' || $open->copy()->addMinutes($step)->lte($close))) {
           // Between opening and closing hours it was added booking times that it was determined
            $booking_times[] = $open->addMinutes($step)->format('H:i');
            $diff -= $step;
        }
    }

    if ($date->isToday()) {
        // Eğer verilen tarih bugünse:
        $firstBookingTime = Carbon::now()->addMinutes($restaurant->widget_booking_minutes_before);
        foreach ($booking_times as $idx => $bt) {
            $bt_carbon = Carbon::createFromTimeString($bt);
            if ($firstBookingTime >= $bt_carbon) {
                // If the initial booking time is earlier than a certain number of minutes this time from the booking time list.
                 We remove it.
                unset($booking_times[$idx]);
            }
        }
    }

    $booking_times = array_unique($booking_times); // We are removing duplicate booking times.
    $booking_times = array_values($booking_times); // We make the array sequential by indexing it again.

    if (end($booking_times) == '00:00') {
        // If the last item in the booking times list is "00:00", we remove this time.
        array_pop($booking_times);
    }

    sort($booking_times); //it was Listed on this line

    return $booking_times; // Finally, We return a list of booking times.
}

```

# Second Excercise

## First

    if you wanna see my API you should go to app/Entegration/Kanye

    you go to this address for login http://localhost:8000/login

```
    email = test@test.com
    password = 123456789
```

And after you login the page redirect this address http://localhost:8000/kanye
