import { Post } from '../../../interface/post'
import { Card, Divider, Flex, Typography } from "antd"

export type PostCardProps = Post
const PostCard = ({
  title,
  description,
  comments,
}: PostCardProps) => {
  return (
    <Card hoverable className="full-width">
      <Flex justify="center">
        <Typography.Title level={4} ellipsis className="zero-margin">
          {title}
        </Typography.Title>
      </Flex>
      <Divider />
      <p>{description}</p>
      <Divider />
      <Flex justify="end">
        <Typography.Title level={5} ellipsis className="zero-margin">
          {comments.length} comments
        </Typography.Title>
      </Flex>
    </Card>
  )
}

export default PostCard

