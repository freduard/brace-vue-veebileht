<script setup>
</script>

<template>
    <header class="bg-black h-[10vh] text-white text-3xl flex justify-between items-center px-6 boxShadow">
        <div>
            <router-link to="/" class="hover:bg-white hover:text-black duration-150 px-2">BRACE</router-link>
        </div>
        <div class="flex gap-2">
            <router-link to="/" class="hover:bg-white hover:text-black duration-150 px-2">KODU</router-link>
            <router-link to="/contact" class="hover:bg-white hover:text-black duration-150 px-2">KONTAKT</router-link>
            <router-link to="/team" class="hover:bg-white hover:text-black duration-150 px-2">MEESKOND</router-link>
        </div>
    </header>
</template>