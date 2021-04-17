$(function() {
   $('#formPekerjaanTambah').click(function() {
      $('#formModalLabelPekerjaan').html('Tambah Data Pekerjaan');
      $('.modal-body form').attr('action', '/pekerjaan/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#pekerjaan').val('');
   });

   $('.formPekerjaanEdit').click(function() {
      $('#formModalLabelPekerjaan').html('Edit Data Pekerjaan');
      $('.modal-body form').attr('action', '/pekerjaan/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/pekerjaan/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#pekerjaan').val(data.pekerjaan);
         }
      });
   });

   // PENDIDIKAN
   $('#formPendidikanTambah').click(function() {
      $('#formModalLabelPendidikan').html('Tambah Data Pendidikan');
      $('.modal-body form').attr('action', '/pendidikan/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#pendidikan').val('');
   });

   $('.formPendidikanEdit').click(function() {
      $('#formModalLabelPendidikan').html('Edit Data Pendidikan');
      $('.modal-body form').attr('action', '/pendidikan/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/pendidikan/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#pendidikan').val(data.pendidikan);
         }
      });
   });

   // AGAMA
   $('#formAgamaTambah').click(function() {
      $('#formModalLabelAgama').html('Tambah Data Agama');
      $('.modal-body form').attr('action', '/agama/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#agama').val('');
   });

   $('.formAgamaEdit').click(function() {
      $('#formModalLabelAgama').html('Edit Data Agama');
      $('.modal-body form').attr('action', '/agama/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/agama/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#agama').val(data.agama);
         }
      });
   });

   // $('#formPekerjaanTambah').click(function() {
   //    $('#formModalLabelPekerjaan').html('Tambah Data Pekerjaan');
   //    $('.modal-body form').attr('action', '/pekerjaan/create');
   //    $('.modal-footer button[type=submit]').html('Simpan');
   // });

   // PENGHASILAN
   $('#formPenghasilanTambah').click(function() {
      $('#formModalLabelPenghasilan').html('Tambah Data Penghasilan');
      $('.modal-body form').attr('action', '/penghasilan/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#penghasilan').val('');
   });

   $('.formPenghasilanEdit').click(function() {
      $('#formModalLabelPenghasilan').html('Edit Data Penghasilan');
      $('.modal-body form').attr('action', '/penghasilan/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/penghasilan/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#penghasilan').val(data.penghasilan);
         }
      });
   });

   // TAHUN AJARAN
   $('#formTahunTambah').click(function() {
      $('#formModalLabelTahun').html('Tambah Data Tahun');
      $('.modal-body form').attr('action', '/tahunAjaran/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#tahun').val('');
      $('#ta').val('');
   });

   $('.formTahunEdit').click(function() {
      $('#formModalLabelTahun').html('Edit Data Tahun');
      $('.modal-body form').attr('action', '/tahunAjaran/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/tahunAjaran/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#tahun').val(data.tahun);
            $('#ta').val(data.ta);
         }
      });
   });

   // JURUSAN
   $('#formJurusanTambah').click(function() {
      $('#formModalLabelJurusan').html('Tambah Data Jurusan');
      $('.modal-body form').attr('action', '/jurusan/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#jurusan').val('');
   });

   $('.formJurusanEdit').click(function() {
      $('#formModalLabelJurusan').html('Edit Data Jurusan');
      $('.modal-body form').attr('action', '/jurusan/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/jurusan/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#jurusan').val(data.jurusan);
         }
      });
   });

   // Banner
   $('#formBannerTambah').click(function() {
      $('#formModalLabelBanner').html('Tambah Data Banner');
      $('.modal-body form').attr('action', '/banner/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#banner').val('');
   });

   $('.formBannerEdit').click(function() {
      $('#formModalLabelBanner').html('Edit Data Banner');
      $('.modal-body form').attr('action', '/banner/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/banner/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#ket').val(data.ket);
            $('#tampilBanner').attr('src', 'http://localhost:8080/img/' + data.banner);
            $('#bannerLama').val(data.banner);
         }
      });
   });

   // Jalur Masuk
   $('#formJalurTambah').click(function() {
      $('#formModalLabelJalur').html('Tambah Data Jalur Masuk');
      $('.modal-body form').attr('action', '/jalurMasuk/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#jalur_masuk').val('');
      $('#kouta').val('');
   });

   $('.formJalurEdit').click(function() {
      $('#formModalLabelJalur').html('Edit Data Jalur Masuk');
      $('.modal-body form').attr('action', '/jalurMasuk/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      // console.log(id);

      $.ajax({
         url : 'http://localhost:8080/jalurMasuk/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#jalur_masuk').val(data.jalur_masuk);
            $('#kouta').val(data.kouta);
         }
      });
   });

   // Lampiran
   $('#formLampiranTambah').click(function() {
      $('#formModalLabelLampiran').html('Tambah Data Lampiran');
      $('.modal-body form').attr('action', '/lampiran/create');
      $('.modal-footer button[type=submit]').html('Simpan');
      $('#lampiran').val('');
   });

   $('.formLampiranEdit').click(function() {
      $('#formModalLabelLampiran').html('Edit Data Lampiran');
      $('.modal-body form').attr('action', '/lampiran/edit');
      $('.modal-footer button[type=submit]').html('Edit');

      var id = $(this).data("id");
      console.log(id);

      $.ajax({
         url : 'http://localhost:8080/lampiran/getId',
         method : 'post',
         dataType : 'json',
         data : {id: id},
         success: function(data) {
            console.log(data);
            $('#id').val(data.id);
            $('#lampiran').val(data.lampiran);
         }
      });
   });

});