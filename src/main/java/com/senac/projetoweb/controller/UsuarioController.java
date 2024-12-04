package com.senac.projetoweb.controller;

import com.senac.projetoweb.model.Usuario;
import com.senac.projetoweb.service.UsuarioService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService service;

    @GetMapping
    public List<Usuario> listarTodos() {

        return service.listarTodos();
    }

    @PostMapping
    public ResponseEntity<Usuario> criarUsuario(@Valid @RequestBody Usuario usuario) {
        System.out.println("Requisição recebida: " + usuario);
        Usuario novoUsuario = service.salvar(usuario);
        System.out.println("Usuário salvo: " + novoUsuario);
        return ResponseEntity.ok(novoUsuario);
    }

}


