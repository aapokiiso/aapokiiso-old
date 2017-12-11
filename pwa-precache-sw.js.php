<?php
header('Content-Type: application/javascript');

$apiUrl = 'https://aapo.kii.so:8080';
$clientId = 'd021228f-c931-4a3d-ba85-deafde2362be';

$client = json_decode(file_get_contents("$apiUrl/client/$clientId"));

$archiveName = $client->currentArchive;
$fallbackUrl = $client->fallbackResource ? $client->fallbackResource->url : '';

echo file_get_contents('assets/pwa-precache-sw.js');
echo <<<JS
self.preCacheSW('$apiUrl', '$clientId', '$archiveName', '$fallbackUrl');
JS;
