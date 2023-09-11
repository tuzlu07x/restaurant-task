<?php

namespace App\Console\Commands;

use App\Entegration\Kanye\GetResponse;
use App\Entegration\Kanye\Kanye;
use Illuminate\Console\Command;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:kanye';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $uri = 'https://api.kanye.rest/';
        $kanye = new Kanye($uri);
        $getRes = new GetResponse($kanye);
        dd($getRes->getRandomSentence($uri));
        return Command::SUCCESS;
    }
}
