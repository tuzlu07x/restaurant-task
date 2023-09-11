<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function page(): \Inertia\Response
    {
        return Inertia::render('Login');
    }

    public function login(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();
        $request->session()->regenerate();

        return redirect()->route('kanye')->with('success', 'Successfully');
    }
}
