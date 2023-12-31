<?php

namespace App\Http\Controllers;

use App\Entegration\Kanye\GetResponse;
use App\Entegration\Kanye\Kanye;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KanyeController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $uri = 'https://api.kanye.rest/';
        $kanye = new Kanye($uri);
        $quantity = 5;
        $kanyeData = $kanye->takeSentences($quantity);
        //I hadn't used DB. I know that it is not optimize.
        return Inertia::render('Kanye', compact('kanyeData'));
    }
}
