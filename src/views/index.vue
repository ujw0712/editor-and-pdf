<script setup>
import { ref } from "vue"
import { jsPDF } from "jspdf"
import html2canvas from 'html2canvas'
import Editor from '@/components/editor'

let editor1 = ref(null)
const downloadPdf = () => {
  const editorHtml = editor1.value.getEditorHtml()

  html2canvas(editorHtml).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
    const pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
    const imgHeight = canvas.height * imgWidth / canvas.width;

    const doc = new jsPDF('p', 'mm');
    let heightLeft = imgHeight;
    let position = 0; // 첫 페이지 출력

    doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight; // 한 페이지 이상일 경우 루프 돌면서 출력

    while (heightLeft >= 20) {
      position = heightLeft - imgHeight; doc.addPage();
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight); heightLeft -= pageHeight;
    } // 파일 저장
    doc.save(`editor-and-pdf_${new Date().toISOString()}.pdf`);
    // document.write('<img src="'+imgData+'" />');//이미지로 표현
  })
}

</script>

<template>
  <div class="page-title-box">
    <div class="page-title">Editor And Pdf
      <button @click="downloadPdf">PDF 다운로드</button>
      <div class="contents-box-sub-title">에디터로 작성한 내용을 PDF파일로 다운로드하세요!</div>
    </div>
  </div>

  <editor ref="editor1"/>
</template>