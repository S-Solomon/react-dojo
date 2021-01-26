import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('../data/db.json' + id);
    // http://localhost:8000/blogs/
    const history = useHistory();

    const handleClick = () => {
        fetch('../data/db.json' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
        {/* the thing on the right only outputs if the left is true  */}
        { isPending && <div>Loading ... </div>}
        { error && <div>{error}</div> }
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>delete</button>
            </article>
        )}

        </div>
     );
}

export default BlogDetails;