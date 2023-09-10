<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Restaurant extends Model
{
    use HasFactory;
    protected $fillable = ['name'];

    public function tables(): HasMany
    {
        return $this->hasMany(Table::class);
    }

    public function diningAreaRestaurants(): BelongsToMany
    {
        return $this->belongsToMany(DiningArea::class, 'dining_area_restaurants', 'restaurant_id', 'dining_area_id');
    }
}
