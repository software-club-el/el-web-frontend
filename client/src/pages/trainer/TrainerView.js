import React from 'react'


function TrainerView(props) {
    const params = window.location.pathname.split('/');

    const viewPost = []
    for (let i = 0; i < props.trainerList.length; i++) {
        if (props.trainerList[i].number === Number(params[3])) {
            viewPost.push(props.trainerList[i])
        }
    }

    console.log(viewPost);

    const mapViewPost = viewPost.map(data => {
        return (
            <div key={data.id} className="board_wrap">
                <div className="board_title">
                    <strong>내정보 상세</strong>
                    <p>내 정보를 확인하세요.</p>
                </div>

                <input type="hidden" name="id" value={sessionStorage.getItem('id')} />
                <div className="board_write_wrap">
                    <div className="board_write">
                        <div class="info">
                            <dl>
                                <dt>이름</dt>
                                <dd>{data.name}</dd>
                            </dl>
                            <dl>
                                <dt>연령</dt>
                                <dd>{data.age}</dd>
                            </dl>
                            <dl>
                                <dt>성별</dt>
                                <dd>{data.sex}</dd>
                            </dl>
                            <dl>
                                <dt>생년월일</dt>
                                <dd>{data.birth}</dd>
                            </dl>
                            <dl>
                                <dt>키</dt>
                                <dd>{data.height}</dd>
                            </dl>
                            <dl>
                                <dt>체중</dt>
                                <dd>{data.weight}</dd>
                            </dl>
                            <dl>
                                <dt>전화번호</dt>
                                <dd>{data.phone}</dd>
                            </dl>
                            <dl>
                                <dt>이메일</dt>
                                <dd>{data.email}</dd>
                            </dl>
                            <dl>
                                <dt>수상</dt>
                                <dd>{data.award}</dd>
                            </dl>
                            <dl>
                                <dt>이력</dt>
                                <dd>{data.career}</dd>
                            </dl>
                            <dl>
                                <dt>헬스장위치</dt>
                                <dd>{data.addr}</dd>
                            </dl>
                            <dl>
                                <dt>프로필사진</dt>
                                <dd>{data.image}</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="bt_wrap">
                        <button className="on">등록</button>
                        <a href="/">취소</a>
                    </div>
                    <div className="bt_wrap">
                        <a href="/">목록</a>
                        <button className="on" onClick={() => document.location.href = `trainerView/${data.id}`}>수정</button>
                        <button className="on" onClick={() => document.location.href = `/api/trainerDelete/${data.id}`}>삭제</button>
                    </div>
                </div>
            </div >
        )
    })

    return (
        <div className='trainerView'>
            {mapViewPost}
        </div>
    )
}

export default TrainerView;