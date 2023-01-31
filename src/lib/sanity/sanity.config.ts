import { dataset, projectId } from '@/lib/sanity/sanity-client';
import { schemaTypes } from '@/lib/sanity/schemas';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

export default defineConfig({
    name: 'default',
    title: 'Hushify CMS',
    basePath: '/studio',

    projectId,
    dataset,

    plugins: [deskTool(), visionTool()],

    schema: {
        types: schemaTypes,
    },
});
