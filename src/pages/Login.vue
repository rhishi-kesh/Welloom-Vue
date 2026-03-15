<script setup>
import { RiArrowRightUpLine } from "@remixicon/vue";
</script>

<template>
    <div class="block md:grid grid-cols-2">
        <div>
            <h3>Log In</h3>
            <p>Join Wedloom and create a stunning collection of memories</p>
            <form class="flex flex-col gap-4">
                <div>
                    <label for="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter Email Address"
                        class="input input-bordered w-full" />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter Password"
                        class="input input-bordered w-full" />
                </div>
                <p>Forgot your Password? <a href="">Click Here</a></p>
                <button class="btn btn-primary w-full" type="submit">
                    Log In
                    <RiArrowRightUpLine color="rgba(255,255,255,1)" />
                </button>
            </form>
        </div>
        <div></div>
    </div>
</template>