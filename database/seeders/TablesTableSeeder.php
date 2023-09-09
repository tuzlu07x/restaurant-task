<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TablesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('tables')->delete();
        
        \DB::table('tables')->insert(array (
            0 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:17:56',
                'dining_area_id' => 1,
                'id' => 1,
                'maximum_capacity' => 4,
                'minimum_capacity' => 2,
                'name' => 'Table-1',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:18:02',
            ),
            1 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:18:05',
                'dining_area_id' => 1,
                'id' => 2,
                'maximum_capacity' => 4,
                'minimum_capacity' => 2,
                'name' => 'Table-2',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:18:08',
            ),
            2 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:18:13',
                'dining_area_id' => 1,
                'id' => 3,
                'maximum_capacity' => 4,
                'minimum_capacity' => 2,
                'name' => 'Table-3',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:18:16',
            ),
            3 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:18:21',
                'dining_area_id' => 1,
                'id' => 4,
                'maximum_capacity' => 4,
                'minimum_capacity' => 2,
                'name' => 'Table-4',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:18:24',
            ),
            4 => 
            array (
                'active' => 0,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 1,
                'id' => 5,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-5',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            5 => 
            array (
                'active' => 0,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 1,
                'id' => 6,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-6',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            6 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 2,
                'id' => 7,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-1',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            7 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 2,
                'id' => 8,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-2',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            8 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 2,
                'id' => 9,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-3',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            9 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 2,
                'id' => 10,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-4',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            10 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 2,
                'id' => 11,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-5',
                'restaurant_id' => 1,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            11 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 1,
                'id' => 12,
                'maximum_capacity' => 2,
                'minimum_capacity' => 1,
                'name' => 'Table-1',
                'restaurant_id' => 2,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            12 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 1,
                'id' => 13,
                'maximum_capacity' => 2,
                'minimum_capacity' => 1,
                'name' => 'Table-2',
                'restaurant_id' => 2,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            13 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 3,
                'id' => 14,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-1',
                'restaurant_id' => 2,
                'updated_at' => '2023-09-09 16:19:48',
            ),
            14 => 
            array (
                'active' => 1,
                'created_at' => '2023-09-09 16:19:48',
                'dining_area_id' => 3,
                'id' => 15,
                'maximum_capacity' => 5,
                'minimum_capacity' => 3,
                'name' => 'Table-2',
                'restaurant_id' => 2,
                'updated_at' => '2023-09-09 16:19:48',
            ),
        ));
        
        
    }
}