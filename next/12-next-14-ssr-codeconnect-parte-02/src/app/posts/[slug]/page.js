import logger from "@/logger"
import { remark } from 'remark';
import html from 'remark-html';

import styles from './page.module.css'
import { CardPost } from "@/components/CardPost";
import db from "../../../../prisma/db";


async function getPostBySlug(slug) {

    const post = await db.post.findFirst({
        where: { 
            slug
        },
        include: {
            author: true
        }
    })

    const processedContent = await remark()
        .use(html)
        .process(post.markdown);
    const contentHtml = processedContent.toString();

    post.markdown = contentHtml

    return post
}

const PagePost = async ({ params }) => {
    const post = await getPostBySlug(params.slug)
    return (<div>
        <CardPost post={post} highlight />
        <h3 className={styles.subtitle}>Código:</h3>
        <div className={styles.code}>
            <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
    </div>)
}

export default PagePost