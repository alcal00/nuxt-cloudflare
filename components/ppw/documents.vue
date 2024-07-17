<script setup lang="ts">
const documents = ref([
  { id: "676-565-4545", name: "documentA.pdf" },
  { id: "676-565-4546", name: "documentB.pdf" },
  { id: "676-565-4547", name: "documentC.pdf" },
])
</script>

<template>
  <div class="overflow-x-auto">
    <ul class="menu menu-horizontal bg-base-200 rounded-box">
      <li>
        <a>
          <icon name="mdi:inbox-arrow-down" size="24" />
          inbox
          <span class="indicator-item badge badge-secondary">0</span>
        </a>
      </li>
      <li>
        <a>
          <icon name="mdi:inbox-arrow-up" size="24" />
          pending
          <span class="indicator-item badge badge-secondary">12</span>
        </a>
      </li>
      <li>
        <a>
          <icon name="mdi:inbox-full" size="24" />
          completed
          <span class="indicator-item badge badge-secondary">99+</span>
        </a>
      </li>
      <li>
        <a>
          <icon name="mdi:inbox-full" size="24" />
          draft
          <span class="indicator-item badge badge-secondary">3</span>
        </a>
      </li>
      <li>
        <a>
          <icon name="mdi:inbox-full" size="24" />
          all
          <span class="indicator-item badge badge-secondary">99+</span>
        </a>
      </li>
    </ul>

    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents">
          <th>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </th>
          <td>
            <div class="flex items-center space-x-3">
              <icon name="mdi:file-document-alert" size="48" />
              <div>
                <div class="font-bold">{{ doc.name }}</div>
                <div class="text-sm opacity-50">..custom.invoice/2</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
          </td>
          <td>Purple</td>
          <th>
            <button class="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      </tbody>
      <!-- foot -->
      <tfoot>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>
