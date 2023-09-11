<?php

namespace App\Entegration\Kanye;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class Kanye
{

    private ?Client $client = null;
    protected string $baseUri;

    public function __construct(string $baseUri)
    {
        $this->baseUri = $baseUri;
    }

    public function client(): Client
    {
        if ($this->client === null) {
            $this->client = new Client([
                'base_uri' => $this->baseUri,
                'headers' => [
                    'Content-Type' => 'application/json',
                    'Accept' => 'application/json',
                ],

            ]);
        }

        return $this->client;
    }

    public function request(string $method, string $url, array $data = []): ?array
    {
        try {
            $response = $this->client()->request($method, $url, $data);
            for ($i = 1; $i <= 5; $i++) {
                return json_decode($response->getBody()->getContents(), true);
            }
        } catch (RequestException $e) {
            return json_decode($e->getResponse()->getBody()->getContents());
        }
    }

    public function get(string $url, array $data = [])
    {
        $data = [];
        for ($i = 0; $i < 5; $i++) {
            $data[] = $this->request('GET', $url, $data);
        }

        return $data;
    }
}
