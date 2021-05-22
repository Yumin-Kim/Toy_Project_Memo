import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ReturnPostingBoard } from "@typings/Entity";
import { Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { imageMediaStyles } from "@layouts/BasicUI/style";

interface ImgMediaCardProps {
  data: ReturnPostingBoard;
}
export default function ImgMediaCard({ data }: ImgMediaCardProps) {
  const classes = imageMediaStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            작성글 :{data.M_Topics[0].title}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            {data.createdAt}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography variant="overline" color="initial">
          <Link
            component={RouterLink}
            to={
              data.M_SubTopics.length !== 0
                ? `${data.M_Topics[0].pathname}/detail/${data.M_SubTopics[0].title}/${data.id}`
                : `${data.M_Topics[0].pathname}/detail/${data.id}`
            }
            style={{ color: "#3f51b5" }}
          >
            Detail Posing
          </Link>
        </Typography>
      </CardActions>
    </Card>
  );
}
