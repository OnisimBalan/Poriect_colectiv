import { library } from "@fortawesome/fontawesome-svg-core";
import { faReadme } from "@fortawesome/free-brands-svg-icons/faReadme";
import {
  faCircleCheck as regularFaCircleCheck,
  faPenToSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faTrashCan as faTrashCanRegular } from "@fortawesome/free-regular-svg-icons/faTrashCan";
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAnglesDown,
  faAnglesLeft,
  faAnglesRight,
  faAnglesUp,
  faAngleUp,
  faArrowLeft,
  faArrowRight,
  faArrowRightFromBracket,
  faArrowRightToBracket,
  faArrowsLeftRightToLine,
  faBoltLightning,
  faCircleCheck,
  faCubes,
  faDiagramSuccessor,
  faEllipsis,
  faEllipsisVertical,
  faExplosion,
  faFileExport,
  faFlorinSign,
  faI,
  faLayerGroup,
  faLink,
  faLinkSlash,
  faM,
  faNoteSticky,
  faShareNodes,
  faT,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowsToEye } from "@fortawesome/free-solid-svg-icons/faArrowsToEye";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons/faAsterisk";
import { faBan } from "@fortawesome/free-solid-svg-icons/faBan";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faBook } from "@fortawesome/free-solid-svg-icons/faBook";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons/faCircleExclamation";
import { faCloud } from "@fortawesome/free-solid-svg-icons/faCloud";
import { faCogs } from "@fortawesome/free-solid-svg-icons/faCogs";
import { faComments } from "@fortawesome/free-solid-svg-icons/faComments";
import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { faEquals } from "@fortawesome/free-solid-svg-icons/faEquals";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faGear } from "@fortawesome/free-solid-svg-icons/faGear";
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons/faLocationArrow";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons/faPaperclip";
import { faPaste } from "@fortawesome/free-solid-svg-icons/faPaste";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons/faPencilAlt";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faRoad } from "@fortawesome/free-solid-svg-icons/faRoad";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons/faRotateLeft";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons/faRotateRight";
import { faSave } from "@fortawesome/free-solid-svg-icons/faSave";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { faSheetPlastic } from "@fortawesome/free-solid-svg-icons/faSheetPlastic";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faSort } from "@fortawesome/free-solid-svg-icons/faSort";
import { faSortDown } from "@fortawesome/free-solid-svg-icons/faSortDown";
import { faSortUp } from "@fortawesome/free-solid-svg-icons/faSortUp";
import { faSync } from "@fortawesome/free-solid-svg-icons/faSync";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import { faTasks } from "@fortawesome/free-solid-svg-icons/faTasks";
import { faThList } from "@fortawesome/free-solid-svg-icons/faThList";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons/faTimesCircle";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons/faUserPlus";
import { faUsers } from "@fortawesome/free-solid-svg-icons/faUsers";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons/faUsersCog";
import { faWrench } from "@fortawesome/free-solid-svg-icons/faWrench";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

import VueCookie from "vue-cookie";
import Vue2Filters from "vue2-filters";
import Vuelidate from "vuelidate";
import Vuex from "vuex";

export function initVueApp(vue) {
  vue.use(VueCookie);
  vue.use(Vuelidate);
  vue.use(Vue2Filters);
  filters.initFilters();
}

export function initFortAwesome(vue) {
  library.add(
    faReadme,
    faArrowLeft,
    faArrowRight,
    faAsterisk,
    faBan,
    faBars,
    faBell,
    faBook,
    faCloud,
    faCogs,
    faDatabase,
    faEye,
    faFlag,
    faHeart,
    faHome,
    faList,
    faLock,
    faPencilAlt,
    faPlus,
    faRoad,
    faSave,
    faSearch,
    faSignInAlt,
    faSignOutAlt,
    faSort,
    faSortDown,
    faSortUp,
    faSync,
    faTachometerAlt,
    faTasks,
    faThList,
    faTimes,
    faTimesCircle,
    faTrash,
    faUser,
    faUserPlus,
    faUsers,
    faUsersCog,
    faWrench,
    faAngleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faEllipsisVertical,
    faFlorinSign,
    faShareNodes,
    faExplosion,
    faCubes,
    faLink,
    faLinkSlash,
    faPlus,
    faBoltLightning,
    faDiagramSuccessor,
    faEquals,
    faLocationArrow,
    faExclamation,
    faCircleExclamation,
    faTrashCan,
    faArrowsToEye,
    faAnglesDown,
    faAnglesUp,
    faCaretRight,
    faCaretDown,
    faPaperclip,
    faXmark,
    faComments,
    faPenToSquare,
    faTrashCanRegular,
    faSheetPlastic,
    faGear,
    faAnglesRight,
    faCircleCheck,
    regularFaCircleCheck,
    faAnglesLeft,
    faNoteSticky,
    faRotateLeft,
    faRotateRight,
    faCopy,
    faPaste,
    faFileExport,
    faT,
    faArrowRightFromBracket,
    faArrowRightToBracket,
    faEllipsis,
    faLayerGroup,
    faM,
    faI,
    faArrowsLeftRightToLine
  );
}

export interface State {
  accountStore: AccountStateStorable;
  pbStore: PBStateStorable;
}

export function initVueXStore(vue) {
  vue.use(Vuex);
  return new Vuex.Store<State>({
    modules: {
      accountStore,
      pbStore,
    },
  });
}
