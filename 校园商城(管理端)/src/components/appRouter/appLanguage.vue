<template>
    <a-dropdown placement="bottom" class=" cursor-pointer">
        <a class="ant-dropdown-link flex" @click.prevent>
            {{ langMap.langMap.get(cureentLanguage)}}
            <DownOutlined class="ml-2" />
        </a>
        <template #overlay>
            <a-menu @click="onClick">
                <a-menu-item v-for="item in langMap.langMap" :key="item[0]" :disabled="cureentLanguage === item[0]">
                   {{ item[1] }}
                </a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>

<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';
// import type { MenuProps } from 'ant-design-vue'
import langMap from '@/locale/langMap'

const i18n = useI18n()
const onClick= ({ key }) => {
    i18n.locale.value = key
};
const cureentLanguage = computed(() => i18n.locale.value)
</script>

