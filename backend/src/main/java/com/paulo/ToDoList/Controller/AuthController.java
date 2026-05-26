package com.paulo.ToDoList.Controller;

import com.paulo.ToDoList.Api.RetornoApi;
import com.paulo.ToDoList.Dtos.Auth.AuthDTO;
import com.paulo.ToDoList.Dtos.Auth.ResponseToken;
import com.paulo.ToDoList.Entity.Usuario;
import com.paulo.ToDoList.Infra.Security.SecurityConfig;
import com.paulo.ToDoList.Infra.Security.Token;
import com.paulo.ToDoList.Service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Auth",description = "EndPoint para login")
@RestController
@RequestMapping("/auth")
@SecurityRequirement(name = SecurityConfig.SECURITY)
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final Token tokenServices;
    private final AuthService authService;

    public AuthController(AuthenticationManager authenticationManager, Token tokenServices, AuthService authService) {
       this.authenticationManager = authenticationManager;
        this.tokenServices = tokenServices;
        this.authService = authService;
    }

    @PostMapping("/login")
    @Operation(summary = "Realizar login",description = "Autentica o usuário no sistema")
    public ResponseEntity<RetornoApi<ResponseToken>> login (@RequestBody @Valid AuthDTO dto) {
    Usuario usuario = authService.info(dto);

    var userNamePassword = new UsernamePasswordAuthenticationToken(dto.email(), dto.password());

    var auth = this.authenticationManager.authenticate(userNamePassword);

    var token = tokenServices.generateToken((Usuario) auth.getPrincipal());


    ResponseToken response = new ResponseToken(token);

    RetornoApi<ResponseToken> apiResponse =
            new RetornoApi<>(true,"Token",response);

    return ResponseEntity.ok(apiResponse);
    }
}
