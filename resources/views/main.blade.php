@extends('layouts.app')

@section('content')

    <header class="bg-dark py-5" style="min-height: 82vh;">
        <div class="container px-5">
            <div class="row gx-5 justify-content-center">
                <div class="col-lg-6">
                    <div class="text-center my-5">
                        <h1 class="display-5 fw-bolder text-white mb-2">
                            Добро пожаловать на <span class="text-primary">MovieNotice</span>
                        </h1>
                        <p class="lead text-white-50 mb-4">
                            Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!
                        </p>
                        <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
                            <a class="btn btn-primary btn-lg px-4 me-sm-3" href="{{ route('login') }}">Начать</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <footer class="py-5 bg-dark">
        <div class="container px-5"><p class="m-0 text-center text-white">Copyright © MovieNotice 2022</p></div>
    </footer>
@endsection
