<?php

namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class SiswaFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        if(session()->get('nisn') == '') {
         return redirect()->to('/');
        }
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        if(session()->get('nisn') != null) {
            return redirect()->to('/siswa');
        }

        if(session()->get('nisn') != null) {
            if(uri_string() == 'loginSiswa') {
                return redirect()->to('/siswa');
            }
        }


    }
}