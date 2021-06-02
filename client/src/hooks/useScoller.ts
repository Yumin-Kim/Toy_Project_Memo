import { T_GetAllPostingAction } from "@actions/post/type";
import { useDispatch } from "react-redux";
import { getAllPostingAction } from "@actions/post";
const dispatch = useDispatch();

type ScollerLoadEffectActin = typeof getAllPostingAction;
