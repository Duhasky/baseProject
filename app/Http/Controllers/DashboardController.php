<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Inertia\Inertia;

class DashboardController extends Controller
{
  /**
   * Handle the incoming request.
   */
  public function __invoke()
  {
    return Inertia::render('Dashboard');
  }
}
