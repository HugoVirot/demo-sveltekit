<script lang="ts">
    export let onSearch: (value: string) => void;

    function onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        console.log(target.value);
        onSearch(target.value);
    }
</script>

<div class="search p-2">
    <input class="form-control w-50 mx-auto" type="text" placeholder="Rechercher un employé par nom, prénom, ville ou service" on:input={onInput} />
</div>