import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const UABC_THEME: CustomThemeConfig = {
	name: 'uabc',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-family-heading': `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #00723F
		'--color-primary-50': '217 234 226', // #d9eae2
		'--color-primary-100': '204 227 217', // #cce3d9
		'--color-primary-200': '191 220 207', // #bfdccf
		'--color-primary-300': '153 199 178', // #99c7b2
		'--color-primary-400': '77 156 121', // #4d9c79
		'--color-primary-500': '0 114 63', // #00723F
		'--color-primary-600': '0 103 57', // #006739
		'--color-primary-700': '0 86 47', // #00562f
		'--color-primary-800': '0 68 38', // #004426
		'--color-primary-900': '0 56 31', // #00381f
		// secondary | #DD971A
		'--color-secondary-50': '250 239 221', // #faefdd
		'--color-secondary-100': '248 234 209', // #f8ead1
		'--color-secondary-200': '247 229 198', // #f7e5c6
		'--color-secondary-300': '241 213 163', // #f1d5a3
		'--color-secondary-400': '231 182 95', // #e7b65f
		'--color-secondary-500': '221 151 26', // #DD971A
		'--color-secondary-600': '199 136 23', // #c78817
		'--color-secondary-700': '166 113 20', // #a67114
		'--color-secondary-800': '133 91 16', // #855b10
		'--color-secondary-900': '108 74 13', // #6c4a0d
		// tertiary | #20419a
		'--color-tertiary-50': '222 227 240', // #dee3f0
		'--color-tertiary-100': '210 217 235', // #d2d9eb
		'--color-tertiary-200': '199 208 230', // #c7d0e6
		'--color-tertiary-300': '166 179 215', // #a6b3d7
		'--color-tertiary-400': '99 122 184', // #637ab8
		'--color-tertiary-500': '32 65 154', // #20419a
		'--color-tertiary-600': '29 59 139', // #1d3b8b
		'--color-tertiary-700': '24 49 116', // #183174
		'--color-tertiary-800': '19 39 92', // #13275c
		'--color-tertiary-900': '16 32 75', // #10204b
		// success | #50B848
		'--color-success-50': '229 244 228', // #e5f4e4
		'--color-success-100': '220 241 218', // #dcf1da
		'--color-success-200': '211 237 209', // #d3edd1
		'--color-success-300': '185 227 182', // #b9e3b6
		'--color-success-400': '133 205 127', // #85cd7f
		'--color-success-500': '80 184 72', // #50B848
		'--color-success-600': '72 166 65', // #48a641
		'--color-success-700': '60 138 54', // #3c8a36
		'--color-success-800': '48 110 43', // #306e2b
		'--color-success-900': '39 90 35', // #275a23
		// warning | #ffc23d
		'--color-warning-50': '255 246 226', // #fff6e2
		'--color-warning-100': '255 243 216', // #fff3d8
		'--color-warning-200': '255 240 207', // #fff0cf
		'--color-warning-300': '255 231 177', // #ffe7b1
		'--color-warning-400': '255 212 119', // #ffd477
		'--color-warning-500': '255 194 61', // #ffc23d
		'--color-warning-600': '230 175 55', // #e6af37
		'--color-warning-700': '191 146 46', // #bf922e
		'--color-warning-800': '153 116 37', // #997425
		'--color-warning-900': '125 95 30', // #7d5f1e
		// error | #e33131
		'--color-error-50': '251 224 224', // #fbe0e0
		'--color-error-100': '249 214 214', // #f9d6d6
		'--color-error-200': '248 204 204', // #f8cccc
		'--color-error-300': '244 173 173', // #f4adad
		'--color-error-400': '235 111 111', // #eb6f6f
		'--color-error-500': '227 49 49', // #e33131
		'--color-error-600': '204 44 44', // #cc2c2c
		'--color-error-700': '170 37 37', // #aa2525
		'--color-error-800': '136 29 29', // #881d1d
		'--color-error-900': '111 24 24', // #6f1818
		// surface | #d3d3d3
		'--color-surface-50': '248 248 248', // #f8f8f8
		'--color-surface-100': '246 246 246', // #f6f6f6
		'--color-surface-200': '244 244 244', // #f4f4f4
		'--color-surface-300': '237 237 237', // #ededed
		'--color-surface-400': '224 224 224', // #e0e0e0
		'--color-surface-500': '211 211 211', // #d3d3d3
		'--color-surface-600': '190 190 190', // #bebebe
		'--color-surface-700': '158 158 158', // #9e9e9e
		'--color-surface-800': '127 127 127', // #7f7f7f
		'--color-surface-900': '103 103 103' // #676767
	}
};
