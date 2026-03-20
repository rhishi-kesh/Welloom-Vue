<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
import QRCode from '../components/QRCode.vue';
import EventInformation from '@/components/EventInformation.vue';
import EventImages from '@/components/EventImages.vue';
import EventFileUpload from '@/components/EventFileUpload.vue';
import LeaveComment from '@/components/LeaveComment.vue';
import AddCoverPhoto from '@/components/AddCoverPhoto.vue';
import ShowComment from '@/components/ShowComment.vue';
</script>

<template>
    <Navbar />
    <section class="py-5 md:py-20 bg-white">
        <div class="container mx-auto">
            <QRCode />
            <EventInformation />
            <LeaveComment />
            <AddCoverPhoto />
            <EventFileUpload :Editing="false" />
            <EventImages :Blur="true" />
            <ShowComment />
        </div>
    </section>
    <Footer />
</template>