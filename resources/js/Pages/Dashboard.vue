<script setup>
  import Layout from '@/Layouts/AuthenticatedLayout.vue';
  defineOptions({ layout: Layout });
</script>

<template>
  <Head title="Painel de Controle" />

  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div
      class="bg-white dark:bg-gray-800 dark:text-gray-100 overflow-hidden rounded-lg"
    >
      <div class="p-6 text-gray-900 dark:text-gray-100">Você está logado</div>
    </div>
  </div>
</template>
