<template>
  <!-- Ini ADD Role -->
  <div
    v-if="editCreateShow"
    class="mb-4 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg"
  >
    <div class="p-6 text-gray-900 dark:text-gray-100">
      <form @submit.prevent="roleCreate">
        <div class="relative flex flex-row gap-2">
          <TextInput
            type="text"
            id="name_role"
            class="w-full"
            v-model="form.name"
          />
          <label
            for="name_role"
            class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            v-text="'Nome da Função'"
          />

          <PrimaryButton
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            v-text="'Registrar'"
            type="submit"
          />
        </div>
        <InputError
          class="mt-2"
          :message="form.errors.name"
        />
      </form>
    </div>
  </div>
  <!-- Fim ADD Role -->
  <!-- Ini Editar Role -->
  <div
    v-if="!editCreateShow"
    class="bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg mb-4"
  >
    <div class="p-6 text-gray-900 dark:text-gray-100">
      <form @submit.prevent="submit">
        <div class="relative flex flex-row gap-2">
          <TextInput
            type="text"
            id="name_role"
            class="w-full"
            v-model="form.name"
          />
          <label
            for="name_role"
            class="absolute text-sm text-gray-500 dark:text-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            v-text="'Novo Nome da Função'"
          />

          <DangerButton
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            v-text="'Cancelar'"
            @click.prevent="cancelEdit"
          />
          <PrimaryButton
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            v-text="'Editar'"
            @click="roleUpdate"
          />
        </div>
        <InputError
          class="mt-2"
          :message="form.errors.name"
        />
      </form>
    </div>
  </div>
  <!-- Fim Editar Role -->

  <!-- Ini Table Role -->
  <div
    class="p-6 bg-white dark:bg-gray-800 dark:text-gray-100 overflow-hidden shadow-sm sm:rounded-lg"
  >
    <div class="text-gray-900 dark:text-gray-100">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th
              scope="col"
              class="px-4 py-3"
              v-text="'Nome'"
            />
            <th
              scope="col"
              class="px-4 py-3 flex justify-end mr-4"
              v-text="'Ações'"
            />
          </tr>
        </thead>
        <tbody>
          <template v-for="role in roles">
            <tr class="border-b dark:border-gray-700">
              <th
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                v-html="role.name"
              />
              <td class="px-4 py-3 flex justify-end">
                <div class="flex flex-row gap-2">
                  <Link :href="route('role.ability', role.id)">
                    <i-material-symbols-security
                      class="text-2xl flex text-green-600"
                    />
                  </Link>
                  <template v-if="editCreateShow">
                    <button @click="editRole(role.id, role.name)">
                      <i-bxs-edit class="text-2xl flex text-yellow-600" />
                    </button>
                  </template>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import Layout from '@/Layouts/AuthenticatedLayout.vue';
  defineOptions({ layout: Layout });

  const tableHeader = ['name', 'Ações'];

  const roleCreate = () => {
    form.post(route('role.create'), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset();
      },
      onFinish: () => {
        form.reset();
      },
    });
  };

  const editCreateShow = ref(true);

  const editCreateHideShow = () => {
    editCreateShow.value = !editCreateShow.value;
  };

  const editRole = (id, name) => {
    form.id = id;
    form.name = name;
    editCreateHideShow();
  };

  const cancelEdit = () => {
    form.reset();
    editCreateHideShow();
  };

  const roleUpdate = () => {
    form.put(route('role.update'), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset();
        editCreateHideShow();
      },
    });
  };

  const form = useForm({
    id: 0,
    name: '',
  });

  const props = defineProps({
    roles: Object,
  });
</script>
