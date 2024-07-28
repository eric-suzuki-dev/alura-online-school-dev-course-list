import Image from "next/image"

export const Comment = ({ comment }) => {
    return (<div>
        <Image 
            src={comment.author.avatar} 
            width={32}
            height={32}
            alt={`Avatar do(a) ${comment.author.name}`}
        />
        <strong>
            @{comment.author.name}
        </strong>
        <p>
            {comment.text}
        </p>
    </div>)
}