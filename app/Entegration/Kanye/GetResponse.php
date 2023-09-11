<?php

namespace App\Entegration\Kanye;

class GetResponse
{
    protected Kanye $kanye;

    public function __construct(Kanye $kanye)
    {
        $this->kanye = $kanye;
    }

    public function getRandomSentence(string $uri): array
    {
        return $this->kanye->get($uri);
    }
}
