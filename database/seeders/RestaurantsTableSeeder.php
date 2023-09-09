<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RestaurantsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('restaurants')->delete();
        
        \DB::table('restaurants')->insert(array (
            0 => 
            array (
                'created_at' => '2023-09-09 16:18:35',
                'id' => 1,
                'name' => 'Green Restaurant',
                'updated_at' => '2023-09-09 16:18:38',
            ),
            1 => 
            array (
                'created_at' => '2023-09-09 16:18:35',
                'id' => 2,
                'name' => 'Blue Restaurant',
                'updated_at' => '2023-09-09 16:18:38',
            ),
        ));
        
        
    }
}