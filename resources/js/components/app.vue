<template>
<div class="container">
    <ul class="nav col-8 mx-auto">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Bejegyzések</router-link>
        </li>
        <li class="nav-item">
             <router-link to="/new" class="nav-link">Új bejegyzés</router-link>
        </li>
    </ul>
    <div class="mt-5">
        <router-view></router-view>
    </div>
</div>
</template>

