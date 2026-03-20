<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import QRCode from '../components/QRCode.vue';
import PersonalMessage from '@/components/PersonalMessage.vue';
import EventImages from '@/components/EventImages.vue';
import EventFileUpload from '@/components/EventFileUpload.vue';
import LeaveComment from '@/components/LeaveComment.vue';
import AddCoverPhoto from '@/components/AddCoverPhoto.vue';
import ShowComment from '@/components/ShowComment.vue';
import EventAttribute from '@/components/EventAttribute.vue';
import EventOTP from '@/components/EventOTP.vue';
import EventName from '@/components/EventName.vue';
import EventInfoBtn from '@/components/EventInfoBtn.vue';
</script>

<template>
    <Navbar />
    <section class="py-5 md:py-20 bg-white">
        <div class="container mx-auto">
            <QRCode />
            <EventAttribute />
            <PersonalMessage />
            <EventOTP />
            <!-- <LeaveComment /> -->
            <!-- <AddCoverPhoto /> -->
            <EventName :Editing="true" />
            <EventFileUpload />
            <EventInfoBtn />
            <EventImages :Blur="false" />
            <ShowComment />
        </div>
    </section>
    <Footer />
</template>