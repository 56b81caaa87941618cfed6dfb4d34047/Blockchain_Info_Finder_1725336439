<!--
INSTRUCTION: Summary: This component contains the app's logo and name in a large, bold font, and on the same line.
INSTRUCTION: There is an additional line of subtext underneath the first line.
INSTRUCTION: Both of these lines are center aligned.
-->

<template>
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
        <div class="flex">
            <!-- Sidebar -->
            <div class="w-64 bg-gray-100 dark:bg-gray-700 p-4">
                <nav>
                    <ul class="space-y-2">
                        <li><a href="#" class="block py-2 px-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded">Home</a></li>
                        <li><a href="#" class="block py-2 px-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded">About</a></li>
                        <li><a href="#" class="block py-2 px-4 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 rounded">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <!-- Main Content -->
            <div class="flex-1">
        <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
            <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        BlockScan: Blockchain Discovery Hub
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                    © 2023 BlockScan. Empowering users with real-time blockchain insights and discoveries. Stay ahead in the crypto world.
                </div>
                <div class="flex-1 flex justify-center mt-4 space-x-4">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow">
                        Hello World
                    </button>
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow">
                        Submit
                    </button>
                </div>
            </div>
            </div>
        </div>
    </footer>
    </footer>
</template>

<script>
export default {
    name: 'SimpleFooterComponent',
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
}
</script>
