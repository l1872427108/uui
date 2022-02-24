<template>
	<a
		class="uu-link"
		:class="[
			`uu-link--${type}`,
			underline ? 'uu-link--underline' : '',
			disabled ? 'uu-link--disabled' : '',
		]"
		:href="href"
	>
		<i v-if="icon" :class="icon"></i>
		<span v-if="$slots.default">
			<slot />
		</span>
	</a>
</template>

<script>
export default {
	name: "uuLink",

	props: {
		type: {
			type: String,
			default: "default",
			validator: function (value) {
				return (
					[
						"default",
						"success",
						"primary",
						"danger",
						"warning",
						"info",
					].indexOf(value) !== -1
				);
			},
		},
		underline: {
			type: Boolean,
			default: true,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: String,
			default: "",
		},
		href: {
			type: String,
			default: "",
		},
	},
	data() {
		return {};
	},

	mouted() {},

	methods: {},
};
</script>

<style lang="scss" scoped>
$normal-color: #000;
$normal-active-color: #409eff;
$primary-color: #409eff;
$primary-active-color: #66b1ff;
$info-color: #909399;
$info-active-color: #a6a9ad;
$success-color: #67c23a;
$success-active-color: #85ce61;
$warning-color: #e6a23c;
$warning-active-color: #ebb563;
$danger-color: #f56c6c;
$danger-active-color: #f78989;

.uu-link {
	display: inline-block;
	text-decoration: none;

	&:hover {
		cursor: pointer;
	}
}

.uu-link--underline {
	&:hover {
		text-decoration: underline;
	}
}
.uu-link--disabled {
	//   pointer-events: none;
	filter: alpha(opacity=50); /*IE滤镜，透明度50%*/
	-moz-opacity: 0.5; /*Firefox私有，透明度50%*/
	opacity: 0.5; /*其他，透明度50%*/
	&:hover {
		text-decoration: none;
		cursor: not-allowed;
	}
}

.uu-link [class*="uui-icon"] + span {
	margin-left: 5px;
}

.uu-link--default {
	color: $normal-color;
	&:hover {
		color: $normal-active-color;
	}
	&.uu-link--disabled {
		color: $normal-color;
	}
}

.uu-link--success {
	color: $success-color;
	&:hover {
		color: $success-active-color;
	}
	&.uu-link--disabled {
		color: $success-active-color;
	}
}
.uu-link--primary {
	color: $primary-color;
	&:hover {
		color: $primary-active-color;
	}
	&.uu-link--disabled {
		color: $primary-active-color;
	}
}
.uu-link--danger {
	color: $danger-color;
	&:hover {
		color: $danger-active-color;
	}
	&.uu-link--disabled {
		color: $danger-active-color;
	}
}
.uu-link--warning {
	color: $warning-color;
	&:hover {
		color: $warning-active-color;
	}
	&.uu-link--disabled {
		color: $warning-active-color;
	}
}
.uu-link--info {
	color: $info-color;
	&:hover {
		color: $info-active-color;
	}
	&.uu-link--disabled {
		color: $info-active-color;
	}
}
</style>
