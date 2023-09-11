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
        $getRes = new GetResponse($kanye);
        $kanyeData = $getRes->getRandomSentence($uri);

        return Inertia::render('Kanye', compact('kanyeData'));
    }
}
