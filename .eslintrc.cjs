module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "plugin:vue/vue3-strongly-recommended",
        "prettier"
    ],
    "rules": {
        "vue/require-default-prop": "off",
        "vue/multi-word-component-names": "off",
    },
    "globals": {
        // General
        "nextTick": true,
        "defineComponent": true,
        "defineAsyncComponent": true,
        "defineCustomElement": true,
        // Vue Reactivity: Core
        "ref": true,
        "computed": true,
        "reactive": true,
        "readonly": true,
        "watchEffect": true,
        "watchPostEffect": true,
        "watchSyncEffect": true,
        "watch": true,
        // Vue Reactivity: Utilities
        "isRef": true,
        "unref": false,
        "toRef": true,
        "toRefs": true,
        "isProxy": true,
        "isReactive": true,
        "isReadonly": true,
        // Vue Reactivity: Advanced
        "shallowRef": true,
        "triggerRef": true,
        "customRef": true,
        "shallowReactive": true,
        "shallowReadonly": true,
        "toRaw": true,
        "markRaw": true,
        "effectScope": true,
        "getCurrentScope": true,
        "onScopeDispose": true,
        // Vue Lifecycle Hooks
        "onMounted": true,
        "onUpdated": true,
        "onUnmounted": true,
        "onBeforeMount": true,
        "onBeforeUpdate": true,
        "onBeforeUnmount": true,
        "onErrorCaptured": true,
        "onRenderTracked": true,
        "onRenderTriggered": true,
        "onActivated": true,
        "onDeactivated": true,
        "onServerPrefetch": true,
        // Vue Dependency Injection
        "provide": true,
        "inject": true,
        // Vue <script setup>
        "defineProps": true,
        "defineEmits": true,
        "useAttrs": true,
        "useSlots": true,
        "defineExpose": true,
        // Inertia
        "router": true,
        "useForm": true,
        "usePage": true,
        "require-v-for-key": false
    },
    "ignorePatterns": [
        "node_modules/**/*",
        "vendor/**/*"
    ]
}
