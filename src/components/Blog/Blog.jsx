import PropTypes from 'prop-types';
const Blog = ({ blog }) => {

    return (
        <div>
            {/* <h1>{blog.title}</h1> */}
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;