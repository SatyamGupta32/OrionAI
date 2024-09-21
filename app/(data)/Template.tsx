export default [
    {
        name: 'Blog Title Generator',
        desc: 'AI that generates blog titles based on your blog information.',
        icon: '/blog-title.png',
        category: 'blog',
        aiPrompt: 'Provide 5 blog title ideas in a bullet list based on the given niche & outline topic. Results should be in rich text editor format.',
        slug: 'blog-title-generator',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content Generator',
        desc: 'AI that generates blog content based on your blog information.',
        icon: '/content-writing.png',
        category: 'blog',
        aiPrompt: 'Provide 5 blog content ideas in a bullet list based on the given niche & outline topic. Results should be in rich text editor format.',
        slug: 'blog-content-generator',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'YouTube SEO Title Generator',
        desc: 'AI that generates SEO titles for YouTube based on your video information.',
        icon: '/youtube-seo.png',
        category: 'seo',
        aiPrompt: 'Provide 5 SEO title ideas in a bullet list based on the given info and outline of the topic. Results should be in rich text editor format.',
        slug: 'youtube-seo-generator',
        form: [
            {
                label: 'Enter your video info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter YouTube outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'AI that generates Instagram posts based on your given information.',
        icon: '/instagram-post.png',
        category: 'post',
        aiPrompt: 'Provide 5 post ideas in a bullet list based on the given info and outline of the topic. Results should be in rich text editor format.',
        slug: 'instagram-post-generator',
        form: [
            {
                label: 'Enter your post info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter post outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'LinkedIn Post Generator',
        desc: 'AI that generates LinkedIn posts based on your professional information.',
        icon: '/linkedin-post.png',
        category: 'post',
        aiPrompt: 'Provide 5 LinkedIn post ideas in a bullet list based on the given info and outline of the topic. Results should be in rich text editor format.',
        slug: 'linkedin-post-generator',
        form: [
            {
                label: 'Enter your post info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter post outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Email Subject Line Generator',
        desc: 'AI that generates email subject lines based on your email content.',
        icon: '/subject.png',
        category: 'email',
        aiPrompt: 'Provide 5 email subject line ideas in a bullet list based on the given content and outline. Results should be in rich text editor format.',
        slug: 'email-subject-generator',
        form: [
            {
                label: 'Enter email content info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter email outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Product Desc. Generator',
        desc: 'AI that generates product descriptions based on your product information.',
        icon: '/product-description.png',
        category: 'ecommerce',
        aiPrompt: 'Provide 5 product description ideas in a bullet list based on the given product details and outline. Results should be in rich text editor format.',
        slug: 'product-description-generator',
        form: [
            {
                label: 'Enter product details',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter product outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Website Headline Generator',
        desc: 'AI that generates website headlines based on your website content.',
        icon: '/website-headline.png',
        category: 'web',
        aiPrompt: 'Provide 5 website headline ideas in a bullet list based on the given content and outline. Results should be in rich text editor format.',
        slug: 'website-headline-generator',
        form: [
            {
                label: 'Enter website content info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter headline outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Social Media Caption',
        desc: 'AI that generates captions for social media posts based on your input.',
        icon: '/social-media-caption.png',
        category: 'post',
        aiPrompt: 'Provide 5 caption ideas in a bullet list based on the given info and outline of the post. Results should be in rich text editor format.',
        slug: 'social-media-caption-generator',
        form: [
            {
                label: 'Enter post info',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter post outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Event Invitation Generator',
        desc: 'AI that generates event invitations based on your event details.',
        icon: '/event-invitation.png',
        category: 'event',
        aiPrompt: 'Provide 5 event invitation ideas in a bullet list based on the given details and outline. Results should be in rich text editor format.',
        slug: 'event-invitation-generator',
        form: [
            {
                label: 'Enter event details',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter invitation outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Code Generator',
        desc: 'AI that generates code snippets based on user-defined parameters.',
        icon: '/coding.png',
        category: 'development',
        aiPrompt: 'Generate a code snippet in the specified programming language based on the provided requirements and context. Results should be in a code block format.',
        slug: 'code-generator',
        form: [
            {
                label: 'Enter programming language',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter code requirements',
                field: 'textarea',
                name: 'outline',
                required: true,
            }
        ]
    }
];
