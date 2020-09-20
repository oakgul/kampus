<template>
    <footer>
        <img src="@/assets/logo.svg" alt="logo">
        <div class="area1">
            <ul>
                <h4>COMMUNITY</h4><br>
                <li>About</li>
                <li>Submit an issue</li>
                <li>Github Repo</li>
                <li>Slack</li>
            </ul>
        </div>
        <div class="area2">
            <ul>
                <h4>GETTING START</h4><br>
                <li>Intrduction</li>
                <li>Documentation</li>
                <li>Usage</li>
                <li>Globals</li>
            </ul>
        </div>
        <div class="area3">
            <ul>
                <h4>RESORCES</h4><br>
                <li>API</li>
                <li>Visibility</li>
                <li>Coomunity</li>
                <li>Marketplace</li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    footer {
        display: flex;
        justify-content: space-around;
        background: #F3FAFB;
        padding: 40px 0;
        font-family: Roboto;

        ul {

        }

        li {
            list-style: none;
        }
    }
</style>