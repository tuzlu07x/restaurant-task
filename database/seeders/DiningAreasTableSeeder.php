<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DiningAreasTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('dining_areas')->delete();
        
        \DB::table('dining_areas')->insert(array (
            0 => 
            array (
                'created_at' => NULL,
                'id' => 1,
                'name' => 'Indoor Area',
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'created_at' => '2023-09-09 16:19:32',
                'id' => 2,
                'name' => 'Outhdoor Area',
                'updated_at' => '2023-09-09 16:19:32',
            ),
            2 => 
            array (
                'created_at' => '2023-09-09 16:19:32',
                'id' => 3,
                'name' => 'Outhdoor Terrace Area',
                'updated_at' => '2023-09-09 16:19:32',
            ),
        ));
        
        
    }
}