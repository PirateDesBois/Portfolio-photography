

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="{{ asset('/img/'. 'logo.png') }}" alt="logo" style="width: 65px; height:auto;"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link active text-light fs-5 fw-bold mx-2" aria-current="page" href="#">Home</a>
                <a class="nav-link text-light fs-5 fw-bold mx-2" href="#">Features</a>
                <a class="nav-link text-light fs-5 fw-bold mx-2" href="#">Pricing</a>
            </div>
            @if (Route::has('login'))
                <div>
                    @auth
                        <a href="{{ url('/dashboard') }}"
                            class="text-light fs-5 fw-bold mx-2">Dashboard</a>
                    @else
                        <a href="{{ route('login') }}" class="text-light fs-5 fw-bold mx-2">Log
                            in</a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}"
                                class="text-light fs-5 fw-bold mx-2">Register</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    </div>
</nav>
