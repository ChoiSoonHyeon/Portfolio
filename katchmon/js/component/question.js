Vue.component('katchmon-question-component', {
	props: [],
	data: function () {
		return {
			isShowForm: false,
			name: '',
			email: '',
			content: ''
		}
	},
	methods: {
		sendQuestionPost: function () {
			// TODO :: name, email, content 유효성 체크 / 비동기 접수 기능 구현 필요
		}
	},
	created: function () {},
	mounted: function () {},
	template: 
		'<div class="katchmon-common-question-self">' + 
			'<transition name="slide-fade-bottom">' + 
				'<div v-if="isShowForm" class="katchmon-common-question-input-self">' + 
					'<div class="katchmon-common-question-input-header">' + 
						'<div class="katchmon-common-question-picture"></div>' + 
						'<div class="katchmon-common-question-profile">' + 
							'<p class="small-text">katchmon</p>' + 
							'<p class="small-text">무엇이든 물어보세요!</p>' + 
						'</div>' + 
						'<button @click="isShowForm=false" class="katchmon-common-question-button-close"><span aria-hidden="true">×</span></button>' + 
					'</div>' + 
					'<div class="katchmon-common-question-input-body">' + 
						'<input v-model="name" type="text" class="katchmon-form-control" placeholder="이름" maxlength="20">' + 
						'<input v-model="email" type="text" class="katchmon-form-control margin-top-10" placeholder="회신받으실 이메일" maxlength="50">' + 
						'<textarea v-model="content" class="katchmon-form-control margin-top-10" placeholder="문의 내용"></textarea>' + 
						'<div>' + 
						'<button @click="sendQuestionPost()" class="katchmon-common-button katchmon-common-button-purple margin-top-20">문의하기</button>' + 
						'</div>' + 
					'</div>' + 
				'</div>' + 
			'</transition>' + 
			'<transition name="slide-fade-bottom-onlyenter">' + 
				'<button v-if="!isShowForm" @click="isShowForm=true" class="katchmon-common-question-button-open"></button>' + 
			'</transition>' + 
		'</div>'
});