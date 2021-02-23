var DARK_MODE = true;

styles = `
/** hide nav */
.Nav_nav__3kyeO,
.SubNav_subnav__1HR8R {
    display: none;
}

/** hide scrollbar */
html::-webkit-scrollbar {
  display: none;
}

html {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/** min width */
html {
    min-width: 300px;
}

/** auto width */
.Layout_page__2Wedt .Layout_main__2_zw8,
.index_center___r_K_,
.index_progress__1aCBt,
.index_createNote__1IzQf,
.index_wrapper__2tUTe .index_main__1_DrK,
#checkAnswer,
.Report_wrapper__34Tnk .Report_main__mVanb,
.StudySummary_studySummary__32y_I,
.span9,
.span12 {
    width: unset;
    overflow: unset;
}

/** word break */
.VocabPronounce_vcoabPronounce__2D0UH .VocabPronounce_word__17Tma,
.index_UserNotesWrap__350zz .index_noteDetail__t9_3- .index_left__2yQI6 {
    word-break: break-word;
}

/** reset span */
[class*=span] {
    float: unset;
}

/** section header */
.span1 h6 {
    margin: 1rem 0;
}

/** cut bottom padding */
.Layout_page__2Wedt {
    padding-bottom: 0;
}

.Layout_page__2Wedt .Layout_main__2_zw8 {
    padding-bottom: 100px;  /** padding for FAB */
    min-height: 100vh;  /** fill viewport */
}

/** FAB position */
.StudyPage_studyPage__1Ri5C .StudyPage_nextBtn__1ygGn {
    position: fixed;
    top: unset;
    bottom: 50px;
    right: 50px;
}

@media (max-width: 768px) {
    /** FAB size */
    .StudyPage_studyPage__1Ri5C .StudyPage_nextBtn__1ygGn {
        bottom: 15px;
        right: 15px;
        width: 60px;
        height: 60px;
        background-size: 60px;
    }
    
    .VocabPronounce_vcoabPronounce__2D0UH {
        display: block;
    }
}

/** delete button */
.index_simpleOptionBox__1bGP6 {
    top: 0;
}

/** pronounceication */
.index_wordBox__IJotZ .index_content__2QwXl {
    flex-wrap: wrap;
    height: unset;
}

.VocabPronounce_vcoabPronounce__2D0UH .VocabPronounce_mlr10__3TCZu {
    margin-right: 20px;
}

/** progress bar */
.index_progressBox__14Xo5 {
    display: block;
}

/** button */
.index_btnBox__pXO_l {
    margin: 1rem 0;
}

.index_option__1CVr2 {
    display: flex;
    width: 100%;
    max-width: 400px;
    margin: auto;
}

/** spell practice */
.index_wrapper__2tUTe .index_main__1_DrK {
    min-width: unset;
    min-height: unset;
    max-width: 800px;
    margin: 2rem;
}

/** summary */
.StudySummary_studySummary__32y_I .StudySummary_items__2vSOp {
    margin-bottom: 2rem;
}
.StudySummary_studySummary__32y_I table {
    width: 100%;
}

/** hint */
.index_hint__2Z39O {
    font-size: 1rem;
}
    

@media (max-width: 425px) {
    /** padding */
    .StudyPage_studyPage__1Ri5C {
        padding: 15px;
    }
    
    /** spell practice */
    .index_wrapper__2tUTe .index_main__1_DrK {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    
    .index_wrapper__2tUTe .index_main__1_DrK .index_closeBtn__2hWAV {
        top: 18px;
        right: 18px;
    }
    
    /** Report */
    .Report_wrapper__34Tnk .Report_main__mVanb {
        width: 100%;
        height: 100%;
        margin: 0;
    }
    
    /** message */
    .Message_message__w-TNe {
        margin-top: 0;
    }
    
    .Message_message__w-TNe span {
        white-space: nowrap;
    }
    
    /** hint */
    .index_hint__2Z39O {
        padding: .5rem;
    }
    
    .index_hint__2Z39O .highlight {
        font-size: 1rem;
        font-weight: bolder;
    }
    
    /** summary */
    .StudySummaryItem_studySummaryItem__k2ME0 {
        height: 40px;
    }
    
    .StudySummaryItem_studySummaryItem__k2ME0 td {
        padding: 4px;
    }
    
    .StudySummaryItem_studySummaryItem__k2ME0 .StudySummaryItem_word__2Nx4Z {
        font-size: 1rem;
    }
    
    .StudySummaryItem_studySummaryItem__k2ME0 .StudySummaryItem_content__3j9YG {
        font-size: .8rem;
    }
    
    .Pronounce_pronounce__g6QPf .Pronounce_audio__3xdMh {
        width: 24px;
        height: 24px;
    }
}
`;

styles_dark = `
/** font */
#root,
.BayTrans_container__PDsgF .BayTrans_paraphrase__2JMIz,
.index_content__1XOlo,
.index_wrapper__2tUTe .index_content__3D3dq,
.Report_reasonText__13GoC {
    color: #ddd;
}

/** background */
.Layout_page__2Wedt {
    background-color: #000;
}

.Layout_page__2Wedt .Layout_main__2_zw8,
.index_noteWrap__DZxrn,
.index_wrapper__2tUTe .index_main__1_DrK,
.Report_main__mVanb {
    background-color: #333;
}

/** summary */
.StudySummaryItem_studySummaryItem__k2ME0 {
    border: #666;
}

.StudySummaryItem_studySummaryItem__k2ME0 td {
    border-top: 1px solid #666;
}

.StudySummaryItem_studySummaryItem__k2ME0.wrong {
    background-color: #400;
}

.StudySummaryItem_studySummaryItem__k2ME0.right {
    background-color: #040;
}

/** progress bar */
.index_progress__1aCBt {
    border: 1px solid #888;
}

.index_progress__1aCBt div:nth-child(2) {
    background-color: #666!important;
    color: #fff!important;
}

.index_progress__1aCBt div:first-child {
    background-color: #066552!important;
}

.index_progress__1aCBt div:last-child {
    background-color: #a05e00!important;
}

/** button */
.index_option__1CVr2 {
    border: 1px solid #888;
}

.index_title__1zZFT {
    color: #ddd;
    border-right: 1px solid #888;
    background-image: unset;
}

/** hint */
.index_hint__2Z39O {
    background-color: #555;
    border: 1px solid #888;
}

.index_hint__2Z39O .highlight {
    color: #fff;
}

/** message */
.Message_message__w-TNe.alert {
    color: #dad7c4;
    border: 1px solid #756f62;
    background-color: #5f4e31;
    text-shadow: none;
}

/** spelling */
.index_mask__2HUE0 {
    background-color: #222;
}

.index_divider__2mmwn {
    background-color: #666;
}

#checkAnswer {
    border: 2px solid #a1a2a5;
    background-color: #616060;
}

/** report */
.Report_wrapper__34Tnk .Report_header__3h0yM .Report_title__1yVu7 {
    color: #ddd;
}

.Report_wrapper__34Tnk .Report_footer__2IxZL .Report_submitBtn__2kfKb:disabled {
    background-color: #3c3c3c;
    color: #616161;
}

/** image */
.index_report__1jKuu,
.index_collect__2zAED,
.Pronounce_audio__3xdMh,
.index_icon__1IK2K,
.StudyPage_nextBtn__1ygGn {
    filter: brightness(.5)!important;
}
`;

var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.textContent = DARK_MODE? styles + styles_dark : styles;
document.head.appendChild(styleSheet);
