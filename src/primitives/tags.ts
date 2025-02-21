import { TagColorMode, TagTypes } from '@components/Tags/types';
import { colorGuide } from '@primitives';

export let getTagColor = (type: TagTypes, mode: TagColorMode) => {
    let colorConfig = colorGuide[mode == 'light' ? 'lightComponents' : 'darkComponents'].tags;
    switch (type) {
        case 'success':
            return colorConfig.success;
        case 'error':
            return colorConfig.error;
        case 'warning':
            return colorConfig.warning;
        default:
            return colorConfig.error;
    }
};
