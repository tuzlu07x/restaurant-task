<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DiningArea extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function tables(): HasMany
    {
        return $this->hasMany(Table::class);
    }

    public function diningAreaRestaurants(): BelongsToMany
    {
        return $this->belongsToMany(DiningArea::class, 'dining_area_restaurants', 'dining_area_id', 'restaurant_id');
    }
}
