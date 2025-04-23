import { cva, type VariantProps } from 'class-variance-authority'

export { default as Text } from './Text.vue'

export const textVariants = cva(
    '',
    {
        variants: {
            variant: {
                h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
                h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
                h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
                h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
                p: 'leading-7 [&:not(:first-child)]:mt-6',
                blockquote: 'mt-6 border-l-2 pl-6 italic',
                lead: 'text-xl text-muted-foreground',
                large: 'text-lg font-semibold',
                small: 'text-sm font-medium leading-none',
                muted: 'text-sm text-muted-foreground'
            },
        },
        defaultVariants: {
            variant: 'h1',
        },
    },
)

export type TextVariants = VariantProps<typeof textVariants>
