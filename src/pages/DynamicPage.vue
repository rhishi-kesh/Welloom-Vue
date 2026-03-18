<script setup>
import { useRoute } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { watch, ref } from 'vue';

const route = useRoute();
const page = ref(route.params.page);
watch(() => route.params.page, (newVal) => {
    page.value = newVal
})
</script>

<template>
    <Navbar />
    <div class="container mx-auto py-20">
        <h1 class="text-4xl font-bold text-center">{{ page }}</h1>
        <p class="text-left mt-5 text-stone-600">
            <b>1. Service Overview</b>
            “Wedloom” is a web platform designed to help users create and manage personalized photo albums, primarily
            for weddings and similar events. Users can create albums, add titles, and generate a QR code or link that
            others can use to access the album and upload photos or videos. The Service is intended to make sharing
            memories with event attendees more convenient and accessible.
            The use of “Wedloom” may require a purchase. Prices for the Service may change, and new fees or
            subscriptions may be introduced at any time. Users will be informed of such changes. Payment processing may
            be handled by third parties, for which the Service holds no responsibility for any related issues or
            disputes.
            The Service may be updated, expanded, or modified at any time to enhance user experience or address
            technical needs.

            <b>2. Account Registration and Management</b>
            To access certain features of “Wedloom,” users must register and create an account by providing a valid
            email address and password. It is the user's responsibility to ensure that the information provided is
            accurate and to maintain the security of their account. Users are solely responsible for all activities that
            occur under their account.
            The Service reserves the right to suspend or delete accounts that violate these terms or engage in
            suspicious activities. Users may delete their account at any time, resulting in the permanent removal of all
            associated data and content.

            <b>3. Conditions of Use</b>
            By using “Wedloom,” you agree to use the platform lawfully and refrain from uploading content that violates
            any applicable laws, including but not limited to copyright infringement, harassment, or illegal
            distribution.
            Anyone with the shared QR code or link can upload content to the album. It is the user’s responsibility to
            control access to the QR code or link. The Service does not guarantee that unauthorized persons will not
            gain access. Users agree to hold the Service harmless from any liability resulting from unauthorized access
            or activities related to the shared QR code or link.
            Users are fully responsible for the content they upload or share via “Wedloom.” The Service does not assume
            any responsibility or liability for user-generated content.
            Using the Service in any way that disrupts its security, integrity, or availability is prohibited.
            Unauthorized attempts to access or manipulate the Service’s systems are not allowed.
            The Service reserves the right to remove content or block access if terms are violated, and users may be
            permanently excluded from the platform for such violations.
            After 1 Year from the date of purchase, all photos, videos, and the corresponding album will be
            automatically deleted. It is the user’s responsibility to download their content if they wish to keep it.
            The Service assumes no liability for content lost due to this automatic deletion.

            <b>4. Intellectual Property</b>
            All content, trademarks, and intellectual property associated with “Wedloom” remain the property of the
            Service or its respective owners. Users do not receive any rights to this content or intellectual property,
            except those explicitly granted under these terms.
            Users retain the rights to their uploaded photos and videos but grant the Service a worldwide,
            non-exclusive, royalty-free license to use, reproduce, and distribute the content within the platform for
            the purpose of providing the Service.
            It is prohibited to copy, modify, or distribute content, trademarks, or intellectual property from “Wedloom”
            without prior written permission. Users may not upload or share content that infringes on the intellectual
            property rights of the Service or others.
            The Service reserves the right to remove content or block access if intellectual property violations are
            detected. Users who believe their rights have been infringed may contact the Service for resolution.

            <b>5. Limitation of Liability</b>
            The Service makes no guarantees regarding the accuracy, completeness, or reliability of content provided.
            Use of the platform is at the user’s own risk.
            The Service is not liable for direct or indirect damages resulting from the use of “Wedloom,” including but
            not limited to loss of profits, data, or business interruptions. In regions where such limitations are not
            allowed, they may not apply to all users.
            The Service’s liability, if applicable, is limited to the amount paid by the user for access. These
            limitations extend to the benefit of the Service’s representatives and agents.

            <b>6. Changes to the Terms</b>
            The Service reserves the right to modify these terms and conditions at any time. Updates will be
            communicated by publishing the revised terms on “Wedtrove,” and they will take effect immediately upon
            publication.
            By continuing to use the platform after the revised terms are published, users agree to the changes. Users
            should review the terms regularly. If a user disagrees with the updated terms, they should discontinue using
            “Wedloom.”
            The Service may change, expand, or discontinue the platform at any time, irrespective of changes to these
            terms.

            <b>7. Termination of Service</b>
            The Service may terminate or suspend access at any time and for any reason without prior notice. The Service
            is not liable for any consequences or damages arising from such termination or suspension, including the
            loss of data or access to content.
            If the Service is terminated, users will be notified in advance when possible, with instructions on securing
            their data if applicable.
            Provisions that naturally extend beyond termination, such as limitations of liability, shall remain in
            effect after the Service is terminated.

            <b>8. Applicable Law and Jurisdiction</b>
            These terms and any related disputes shall be governed by the laws applicable to the Service. All disputes
            arising from these terms or the use of “Wedtrove” are subject to the exclusive jurisdiction of the relevant
            courts. Users agree to submit to the personal jurisdiction of these courts and waive any objections.
            If any provision of these terms is found to be invalid, the remaining provisions shall continue to be
            enforceable.

            <b>9. Final Provisions</b>
            If any part of these terms becomes invalid, the remaining provisions will still apply. Any changes or
            additions to these terms must be in writing to be effective.
            These terms represent the entire agreement between the user and the Service regarding “Wedloom” and override
            any prior agreements.
            Failure by the Service to enforce any provision does not constitute a waiver of that provision. In case of
            disputes, the Service is entitled to reimbursement of reasonable attorney’s fees and court costs.
        </p>
    </div>
    <Footer />
</template>

<style scoped>
b {
    display: block;
    margin-top: 20px;
    color: #333;
}
</style>