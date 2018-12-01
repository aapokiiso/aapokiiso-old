<?php
header('Content-Type: application/javascript');

$apiUrl = 'https://aapo.kii.so:8080';
$clientId = '030118b2-74f0-4b4d-8e2b-9fcc2640e66e';

$client = json_decode(file_get_contents("$apiUrl/client/$clientId"));

$archiveName = $client->currentArchive;
$fallbackUrl = $client->fallbackResource ? $client->fallbackResource->url : '';

echo file_get_contents('assets/pwa-precache-sw.js');
echo <<<JS
self.preCacheSW('$apiUrl', '$clientId', '$archiveName', '$fallbackUrl');
JS;
