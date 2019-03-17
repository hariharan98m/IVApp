<template>

    <nav class="navbar is-fixed-bottom has-background-white marginBottom">
        
        <div class="navbar-brand">

                        <a href="" class="navbar-item">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <i>Connect with us on</i>
                        </a>

                        <a href="" class="navbar-item">
                            <!-- <font-awesome-icon prefix="fab" icon="facebook" size="xs" /> -->
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="" class="navbar-item">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="" class="navbar-item">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram'}" class="fa-2x fa-pad"/>
                        </a>
                        <a href="" class="navbar-item">
                            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'snapchat-square'}" class="fa-2x fa-pad"/>
                        </a>

  </div>

        </nav>

</template>


<script>
export default {
    
}
</script>

<style scoped>
.fa-pad{
    padding: 2px;
}

.marginBottom{
    margin-bottom: 0px;
}
</style>
